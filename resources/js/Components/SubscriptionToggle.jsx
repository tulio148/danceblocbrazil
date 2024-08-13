import { useForm } from "@inertiajs/react";

export default function SubscriptionToggle({ student }) {
    const { post, data, setData } = useForm({
        is_subscribed: student?.is_subscribed || false,
    });

    const handleToggle = () => {
        setData("is_subscribed", !data.is_subscribed);

        try {
            post(route("profile.reminder"));
        } catch (error) {
            console.error(error);
        }
    };

    return student ? (
        <div className="mt-8">
            <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={data.is_subscribed}
                    onChange={handleToggle}
                    className="form-checkbox text-db-pink h-5 w-5 mr-2"
                />
                <span className="tracking-wider text-lg">
                    Receive Class Reminders
                </span>
            </label>
        </div>
    ) : null;
}
