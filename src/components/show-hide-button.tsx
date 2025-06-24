import CloseEye from "@/icons/close-eye";
import OpenEye from "@/icons/open-eye";

export default function ShowHideButton({ setShowPassword, showPassword }: {
    setShowPassword: (show: boolean) => void;
    showPassword: boolean;
}
) {
    return (
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
        >
            {showPassword ? <CloseEye /> : <OpenEye />}
        </button>
    )
}
