type ColorProps = {
	color: string
	setColor: (color: string) => void
	selectedColor?: string
}

export default function Color({ color, setColor, selectedColor }: ColorProps) {
	const handleClick = () => {
		setColor(color)
	}

	const isSelected = color === selectedColor
	const buttonClasses = isSelected
		? 'border-2 border-white'
		: 'border-2 border-transparent hover:border-2 hover:border-white'
	const divClasses = isSelected
		? 'border-blue-300'
		: 'border-transparent hover:border-gray-300'

	return (
		<div
			className={`flex items-center justify-center w-9 h-9 border-[2px] rounded-md ${divClasses}`}
		>
			<button
				type="button"
				style={{ backgroundColor: color, boxSizing: 'border-box' }}
				onClick={handleClick}
				className={`flex items-center justify-center w-8 h-8 rounded-md ${buttonClasses}`}
			/>
		</div>
	)
}