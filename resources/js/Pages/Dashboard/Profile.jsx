import SubscriptionToggle from "@/Components/SubscriptionToggle";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Profile({ user, mustVerifyEmail, status, student }) {
    return (
        <>
            <div className="mt-40 sm:mt-52 max-w-2xl w-full   mx-auto">
                <div className="px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 border-b bg-gradient-to-br from-white from-50% shadow rounded-xl">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                        <SubscriptionToggle student={student} />
                    </div>

                    {user.signed_in_with == "email" && (
                        <div className="p-4 sm:p-8 border-b bg-gradient-to-br from-white from-50% shadow rounded-xl">
                            <UpdatePasswordForm />
                        </div>
                    )}
                    <div className="p-4 sm:p-8 border-b bg-gradient-to-br from-white from-50% shadow rounded-xl">
                        <DeleteUserForm user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}
