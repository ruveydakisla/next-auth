
export default function OpenEye({
    width = 24,
    height = 24,
    color = "#222422",
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M3 13c3.6-8 14.4-8 18 0"></path><path fill={color} d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path></g></svg>
    )
}
