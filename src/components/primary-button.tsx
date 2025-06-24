
export default function PrimaryButton({ icon, text }: { icon?: React.ReactNode, text: string }) {
    return (
        <button
            type="submit"
            className="bg-[#FF6B6B] flex items-center justify-center text-white p-2 rounded-full px-4 mt-5 hover:bg-[#FF4C4C] w-full"
        >
            <span className="text-sm">{text}</span>
            <span className="ml-2">
                {icon}
            </span>
        </button>)
}
