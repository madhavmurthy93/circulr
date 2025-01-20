"use client";

import { getItemCategoryValues, getItemStatusValues } from "@/utils/common";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

function AddItemForm({ onCloseModal }: { onCloseModal?: () => void }) {
  const router = useRouter();
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

  async function onSubmit(data: FormValues) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("status", data.status);
    data.itemDetails.forEach((detail) => {
      formData.append("details[]", detail.value);
    });
    data.files.forEach((file) => {
      if (file.file) {
        formData.append("files[]", file.file);
      }
    });

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        body: formData,
        headers: {
          enctype: "multipart/form-data",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Item added successfully: ", await response.json());
      toast.success("Item added successfully");
      reset();
      router.refresh();
      onCloseModal?.();
    } catch (error) {
      console.error("Error adding item: ", error);
      toast.error(`Item could not be added ${error}`);
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
      <Button>Add</Button>
    </form>
  );
}

export default AddItemForm;
