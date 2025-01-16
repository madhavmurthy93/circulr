import { categories } from "@/utils/categories";
import { useFieldArray, useForm } from "react-hook-form";
import { HiOutlinePlus } from "react-icons/hi2";
import FileInput from "../form/FileInput";
import FormField from "../form/FormField";
import Input from "../form/Input";
import ListInput from "../form/ListInput";
import Select from "../form/Select";
import TextArea from "../form/TextArea";
import Button from "../ui/Button";

type FormValues = {
  name: string;
  description: string;
  itemDetails: { value: string }[];
  files: { file: File | null }[];
  category: string;
  status: string;
};

function CreateItemForm() {
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
      name: "",
      description: "",
      itemDetails: [],
      files: [],
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
    fields: fileFields,
    append: appendFile,
    remove: removeFile,
  } = useFieldArray({
    control,
    name: "files",
  });

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-112 md:w-128 flex w-64 flex-col gap-4 overflow-y-scroll p-4 sm:w-96"
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
          {fileFields.map((_: any, index: number) => (
            <FileInput
              key={index}
              id={`files-${index}`}
              onChange={(file: File | null) =>
                setValue(`files.${index}.file`, file)
              }
              onRemove={() => removeFile(index)}
            />
          ))}
          <button
            type="button"
            className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-300 text-primary-700 hover:text-primary-600"
            onClick={(e) => {
              e.preventDefault();
              appendFile({ file: null });
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
          options={categories}
          {...register("category", { required: "Category is required" })}
        />
      </FormField>
      <FormField label="Status">
        <Select
          id="status"
          options={["active", "inactive"]}
          {...register("status", { required: "Status is required" })}
        />
      </FormField>
      <Button>Create</Button>
    </form>
  );
}

export default CreateItemForm;
