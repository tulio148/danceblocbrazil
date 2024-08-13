import { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Layout>
            <Head title="Confirm Password" />
            <div className="w-screen h-screen flex justify-center ">
                <div className=" sm:border border-gray-300 sm:shadow-md p-10 sm:p-8 sm:w-3/4 w-full max-w-xl">
                    <div className="flex flex-col gap-4">
                        <div className="mb-4 text-sm text-gray-600">
                            This is a secure area of the application. Please
                            confirm your password before continuing.
                        </div>

                        <form onSubmit={submit}>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Confirm
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
