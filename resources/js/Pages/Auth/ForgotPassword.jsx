import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Layout>
            <Head title="Forgot Password" />
            <div className="w-screen h-screen flex justify-center ">
                <div className=" sm:border border-gray-300 sm:shadow-md p-10 sm:p-8 sm:w-3/4 w-full max-w-xl">
                    <div className="flex flex-col gap-4">
                        <div className="mb-4 text-sm text-gray-600">
                            Forgot your password? No problem. Just let us know
                            your email address and we will email you a password
                            reset link that will allow you to choose a new one.
                        </div>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Email Password Reset Link
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
