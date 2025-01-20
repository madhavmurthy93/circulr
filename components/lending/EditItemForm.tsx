import { Item } from "@/types/common";
import { getItemCategoryValues, getItemStatusValues } from "@/utils/common";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";
import FileInput from "../form/FileInput";
import FormField from "../form/FormField";
import Input from "../form/Input";
import ListInput from "../form/ListInput";
import Select from "../form/Select";
import TextArea from "../form/TextArea";
import Button from "../ui/Button";

type FormValues = {
  id: number;
  name: string;
  description: string;
  itemDetails: { value: string }[];
  existingImages: { url: string }[];
  newImages: { file: File | null }[];
  category: string;
  status: string;
};

function EditItemForm({
  item,
  onCloseModal,
}: {
  item: Item;
  onCloseModal?: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    control,
    watch,
    formState,
  } = useForm<FormValues>({
    defaultValues: {
      id: item.id,
      name: item.name,
      description: item.description,
      itemDetails: item.details.map((detail) => ({ value: detail })),
      existingImages: item.images.map((url) => ({ url })),
      newImages: [],
      category: item.category,
      status: item.status,
    },
  });

  const {
    fields: detailFields,
    append: appendDetail,
    remove: removeDetail,
  } = useFieldArray({
    control,
    name: "itemDetails",
  });

  const {
    fields: exisingImageFields,
    append: appendExistingImage,
    remove: removeExistingImage,
  } = useFieldArray({
    control,
    name: "existingImages",
  });

  const {
    fields: newImageFields,
    append: appendNewImage,
    remove: removeNewImage,
  } = useFieldArray({
    control,
    name: "newImages",
  });

  const { errors } = formState;

  async function onSubmit(data: FormValues) {
    console.log(data);
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("status", data.status);

    data.itemDetails.forEach((detail) => {
      formData.append("details[]", detail.value);
    });
    item.images
      .filter((image) => !data.existingImages.some((i) => i.url === image))
      .forEach((image) => {
        formData.append("deletedImages[]", image);
      });
    data.newImages.forEach((image) => {
      if (image.file) {
        formData.append("newImages[]", image.file);
      }
    });

    try {
      const response = await fetch("/api/items", {
        method: "PUT",
        body: formData,
        headers: {
          enctype: "multipart/form-data",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Item updated successfully: ", await response.json());
      toast.success("Item updated successfully");
      reset();
      onCloseModal?.();
    } catch (error) {
      console.error("Error updating item: ", error);
      toast.error(`Item could not be updated ${error}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-112 md:w-128 flex w-64 flex-col gap-4 overflow-y-scroll py-4 sm:w-96"
    >
      <FormField label="Name" error={errors?.name?.message?.toString()}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
      </FormField>
      <FormField
        label="Description"
        error={errors?.description?.message?.toString()}
      >
        <TextArea
          id="description"
          {...register("description", { required: "Description is required" })}
        />
      </FormField>
      <FormField label="Media">
        <div className="flex flex-wrap gap-2">
          {exisingImageFields.map((_: any, index: number) => (
            <div
              key={index}
              className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-300"
            >
              <img
                src={getValues(`existingImages.${index}.url` as const)}
                alt=""
                className="h-24 w-24 rounded-md object-cover"
              />
              <span
                className="absolute inset-y-0 right-0 cursor-pointer pr-2 pt-2"
                onClick={() => removeExistingImage(index)}
              >
                <HiOutlineXMark />
              </span>
            </div>
          ))}
          {newImageFields.map((_: any, index: number) => (
            <FileInput
              key={index}
              id={`files-${index}`}
              onChange={(file: File | null) =>
                setValue(`newImages.${index}.file`, file)
              }
              onRemove={() => removeNewImage(index)}
            />
          ))}
          <button
            type="button"
            className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-300 text-primary-700 hover:text-primary-600"
            onClick={(e) => {
              e.preventDefault();
              appendNewImage({ file: null });
            }}
          >
            <span className="text-2xl">
              <HiOutlinePlus />
            </span>
          </button>
        </div>
      </FormField>
      <FormField label="Item Details">
        {detailFields.map((_: any, index: number) => (
          <ListInput
            key={index}
            type="text"
            id={`itemDetails-${index}`}
            onRemove={() => removeDetail(index)}
            {...register(`itemDetails.${index}.value` as const)}
          />
        ))}
        <button
          type="button"
          className="flex items-center justify-center rounded-md border border-dashed border-gray-300 px-3 py-2 text-primary-700 hover:text-primary-600"
          onClick={(e) => {
            e.preventDefault();
            appendDetail({ value: "" });
          }}
        >
          <span className="text-2xl">
            <HiOutlinePlus />
          </span>
        </button>
      </FormField>
      <FormField label="Category">
        <Select
          id="category"
          options={getItemCategoryValues()}
          {...register("category", { required: "Category is required" })}
        />
      </FormField>
      <FormField label="Status">
        <Select
          id="status"
          options={getItemStatusValues()}
          {...register("status", { required: "Status is required" })}
        />
      </FormField>
      <Button>Edit</Button>
    </form>
  );
}

export default EditItemForm;
