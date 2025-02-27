
export default function CustomSelect({ options }) {
    return (
        <select className="form-control">
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))
            }
            
        </select>
    )
}