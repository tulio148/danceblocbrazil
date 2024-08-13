import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Textarea from "./Textarea";

export default function UpsertTerm({
    initialData,
    closeCreateModal,
    closeUpdateModal,
}) {
    const formattedStart = formatDatetime(initialData?.start_date);
    const formattedEnd = formatDatetime(initialData?.end_date);

    const { data, setData, post, processing, errors, reset } = useForm({
        id: initialData?.id || "",
        name: initialData?.name || "",
        start_date: formattedStart ? formattedStart : "",
        end_date: formattedEnd ? formattedEnd : "",
        instructor: initialData?.instructor || "",
        description: initialData?.description || "",
        level: initialData?.level || "",
        style: initialData?.style || "",
        location: initialData?.location || "",
        price: initialData?.price || "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        initialData
            ? post(route("terms.update"), {
                  onSuccess: (page) => closeUpdateModal(),
              })
            : post(route("terms.store"), {
                  onSuccess: (page) => closeCreateModal(),
              });
    };
    return (
        <form
            onSubmit={submit}
            className="flex flex-col justify-center items-center gap-3 pb-6"
        >
            <div className="grid sm:grid-cols-2  gap-5 p-4 w-full">
                <TextInput
                    id="id"
                    name="id"
                    value={data.id}
                    className="mt-1 block sm:col-span-2 "
                    autoComplete="id"
                    isFocused={true}
                    onChange={(e) => setData("id", e.target.value)}
                    required
                    placeholder="Id"
                />
                <InputError message={errors.id} className="mt-2" />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block sm:col-span-2 "
                    autoComplete="name"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    placeholder="Name"
                />

                <InputError message={errors.name} className="mt-2" />
                <Textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full sm:col-span-2"
                    autoComplete="description"
                    onChange={(e) => setData("description", e.target.value)}
                    placeholder="Description"
                    required
                />
                <InputError message={errors.description} className="mt-2" />
                <TextInput
                    id="start_date"
                    type="datetime-local"
                    name="start_date"
                    value={data.start_date}
                    className="mt-1 block w-full"
                    autoComplete="start_date"
                    onChange={(e) => setData("start_date", e.target.value)}
                    required
                    placeholder="Start Date"
                />
                <InputError message={errors.start_date} className="mt-2" />
                <TextInput
                    id="end_date"
                    type="datetime-local"
                    name="end_date"
                    value={data.end_date}
                    className="mt-1 block w-full"
                    autoComplete="end_date"
                    onChange={(e) => setData("end_date", e.target.value)}
                    required
                    placeholder="End Date"
                />
                <InputError message={errors.end_date} className="mt-2" />
                <SelectInput
                    options={[
                        "",
                        "Open",
                        "Beginner",
                        "Intermediate",
                        "Advanced",
                        "Fundamentals",
                        "Improvers",
                    ]}
                    className="mt-1 block w-full"
                    value={data.level}
                    onChange={(e) => {
                        setData("level", e.target.value);
                    }}
                    required
                    placeholder="Level"
                />
                <InputError message={errors.level} className="mt-2" />
                <SelectInput
                    options={["", "Samba", "Funk"]}
                    className="mt-1 block w-full"
                    value={data.style}
                    onChange={(e) => {
                        setData("style", e.target.value);
                    }}
                    required
                    placeholder="Style"
                />
                <InputError message={errors.style} className="mt-2" />
                <SelectInput
                    options={["", "Lauren", "That One"]}
                    className="mt-1 block w-full"
                    value={data.instructor}
                    onChange={(e) => {
                        setData("instructor", e.target.value);
                    }}
                    required
                    placeholder="Instructor"
                />

                <SelectInput
                    options={["", "ICON Dance Studio"]}
                    className="mt-1 block w-full"
                    value={data.location}
                    onChange={(e) => {
                        setData("location", e.target.value);
                    }}
                    required
                    placeholder="Location"
                />

                <TextInput
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    autoComplete="price"
                    onChange={(e) => setData("price", e.target.value)}
                    required
                    placeholder="Price"
                />
                <InputError message={errors.price} className="mt-2" />
            </div>
            <PrimaryButton className="" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
}
const formatDatetime = (date) => {
    if (!date) {
        return;
    }
    const parsedDatetime = new Date(date);
    const year = parsedDatetime.getFullYear();
    const month = (parsedDatetime.getMonth() + 1).toString().padStart(2, "0");
    const day = parsedDatetime.getDate().toString().padStart(2, "0");
    const hour = parsedDatetime.getHours().toString().padStart(2, "0");
    const minute = parsedDatetime.getMinutes().toString().padStart(2, "0");
    const formattedDatetime = `${year}-${month}-${day}T${hour}:${minute}`;
    return formattedDatetime;
};
