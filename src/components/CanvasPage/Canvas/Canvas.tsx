import React from 'react'

type CanvasProps = {
	isOpen: boolean
}

export default function Canvas({ isOpen }: CanvasProps) {
	const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const data = event.dataTransfer.getData('text/plain')
		const { id, offsetX, offsetY } = JSON.parse(data)
		const element = document.getElementById(id)
		if (element) {
			const boardRect = event.currentTarget.getBoundingClientRect()
			const x = event.clientX - boardRect.left - offsetX
			const y = event.clientY - boardRect.top - offsetY
			element.style.position = 'absolute'
			element.style.left = `${x}px`
			element.style.top = `${y}px`
			event.currentTarget.appendChild(element)
		}
	}

	return (
		<div className="flex items-center justify-center flex-grow">
			<div
				id="board"
				onDragOver={onDragOver}
				onDrop={onDrop}
				className={`bg-white relative ${
					isOpen ? 'w-[700px] h-[500px]' : 'w-[900px] h-[600px]'
				}`}
			>
				드롭 영역
			</div>
		</div>
	)
}