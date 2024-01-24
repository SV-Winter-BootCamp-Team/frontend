import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ThreeTest from './ThreeTest'

export type ImageType = {
	key: number
	src: string
	alt: string
}

export type HandleThreeType = {
	color: string
	x: number
}

export default function OnBoardingTemplate() {
	const images1: ImageType[] = [
		{
			key: 1,
			src: '/images/svg/examples/example01.svg',
			alt: 'onBoarding1',
		},
		{
			key: 2,
			src: '/images/svg/examples/example02.svg',
			alt: 'onBoarding2',
		},
		{
			key: 3,
			src: '/images/svg/examples/example03.svg',
			alt: 'onBoarding2',
		},
		{
			key: 4,
			src: '/images/svg/examples/example04.svg',
			alt: 'onBoarding2',
		},
		{
			key: 5,
			src: '/images/svg/examples/example05.svg',
			alt: 'onBoarding2',
		},
		{
			key: 6,
			src: '/images/svg/examples/example06.svg',
			alt: 'onBoarding2',
		},
		{
			key: 7,
			src: '/images/svg/examples/example07.svg',
			alt: 'onBoarding2',
		},
		{
			key: 8,
			src: '/images/svg/examples/example08.svg',
			alt: 'onBoarding2',
		},
		{
			key: 9,
			src: '/images/svg/examples/example09.svg',
			alt: 'onBoarding2',
		},
		{
			key: 10,
			src: '/images/svg/examples/example10.svg',
			alt: 'onBoarding2',
		},
	]
	const images2: ImageType[] = [
		{
			key: 1,
			src: '/images/svg/examples/example11.svg',
			alt: 'onBoarding1',
		},
		{
			key: 2,
			src: '/images/svg/examples/example12.svg',
			alt: 'onBoarding2',
		},
		{
			key: 3,
			src: '/images/svg/examples/example13.svg',
			alt: 'onBoarding2',
		},
		{
			key: 4,
			src: '/images/svg/examples/example14.svg',
			alt: 'onBoarding2',
		},
		{
			key: 5,
			src: '/images/svg/examples/example15.svg',
			alt: 'onBoarding2',
		},
		{
			key: 6,
			src: '/images/svg/examples/example16.svg',
			alt: 'onBoarding2',
		},
		{
			key: 7,
			src: '/images/svg/examples/example17.svg',
			alt: 'onBoarding2',
		},
		{
			key: 8,
			src: '/images/svg/examples/example18.svg',
			alt: 'onBoarding2',
		},
		{
			key: 9,
			src: '/images/svg/examples/example19.svg',
			alt: 'onBoarding2',
		},
		{
			key: 10,
			src: '/images/svg/examples/example20.svg',
			alt: 'onBoarding2',
		},
	]
	const images3: ImageType[] = [
		{
			key: 1,
			src: '/images/svg/examples/example21.svg',
			alt: 'onBoarding1',
		},
		{
			key: 2,
			src: '/images/svg/examples/example22.svg',
			alt: 'onBoarding2',
		},
		{
			key: 3,
			src: '/images/svg/examples/example23.svg',
			alt: 'onBoarding2',
		},
		{
			key: 4,
			src: '/images/svg/examples/example24.svg',
			alt: 'onBoarding2',
		},
		{
			key: 5,
			src: '/images/svg/examples/example25.svg',
			alt: 'onBoarding2',
		},
		{
			key: 6,
			src: '/images/svg/examples/example26.svg',
			alt: 'onBoarding2',
		},
		{
			key: 7,
			src: '/images/svg/examples/example27.svg',
			alt: 'onBoarding2',
		},
		{
			key: 8,
			src: '/images/svg/examples/example28.svg',
			alt: 'onBoarding2',
		},
		{
			key: 9,
			src: '/images/svg/examples/example29.svg',
			alt: 'onBoarding2',
		},
		{
			key: 10,
			src: '/images/svg/examples/example30.svg',
			alt: 'onBoarding2',
		},
	]
	const [handleThree, setHandleThree] = useState<HandleThreeType>({
		color: '#80B9BF',
		x: 0,
	})
	const [mousex, setMousex] = useState(0)

	const handleMouseMove = (e: React.MouseEvent) => {
		const x = e.clientX / window.innerWidth
		setMousex(1 / (1 + Math.exp(-35 * (x - 0.5))))

		const red = Math.round(212 - 110 * (1 - x))
		const green = Math.round(212 + 18 * (1 - x))
		const blue = Math.round(212 + 43 * (1 - x))

		const color = `rgb(${red}, ${green}, ${blue})`

		setHandleThree({
			color: color,
			x: mousex,
		})
	}

	return (
		<div className="w-full overflow-hidden">
			<section className="w-full h-fit flex-col ">
				<div className="w-full h-screen flex justify-center">
					<Canvas shadows>
						<ThreeTest {...handleThree} />
					</Canvas>
					<div className="absolute bottom-5 h-3 w-7 flex justify-between items-center">
						<div
							className="bg-gray-600 aspect-square rounded-full"
							style={{
								height: `${6 + (1 - mousex) * 6}px`,
							}}
						/>
						<div
							className="absolute bg-gray-600 rounded-full"
							style={{
								height: `${12 - mousex * (1 - mousex) * 24}px`,
								width: `${12 + mousex * (1 - mousex) * 12}px`,
								left: `${mousex * 60}%`,
							}}
						/>
						<div
							className="bg-gray-600 aspect-square rounded-full"
							style={{
								height: `${6 + mousex * 6}px`,
							}}
						/>
					</div>
					<div className="absolute right-0 h-full w-3/5 font-jua text-5xl">
						<div
							style={{
								width: '100%',
								height: '300px',
								position: 'absolute',
								top: `${(0.4 - mousex) * window.innerHeight}px`,
								opacity: 0.8 - mousex * 2,
							}}
						>
							<div className="flex flex-col items-center mx-20 h-80 justify-center">
								<p>AI를 활용한 '나'를</p>
								<p>표현하는 배경 만들기!</p>
							</div>
						</div>
					</div>
					<div className="absolute left-0 h-full w-3/5 font-jua text-5xl">
						<div
							style={{
								width: '100%',
								height: '300px',
								position: 'absolute',
								top: `${(mousex - 0.6) * window.innerHeight}px`,
								opacity: mousex * 2 - 1.2,
							}}
						>
							<div className="flex flex-col items-center mx-20 h-80 justify-center">
								<p>지루한 회의...</p>
								<p>재미없는 시간...</p>
							</div>
						</div>
					</div>
					<div
						className="absolute h-full w-full"
						onMouseMove={handleMouseMove}
					/>
				</div>
				<div className={`w-full h-screen bg-white`}>
					<div className="flex flex-row-reverse gap-[10px] pt-40 overflow-hidden">
						{images1.map((image) => (
							<img
								className="w-[300px] animate-slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
						{images1.map((image) => (
							<img
								className="w-[300px] animate-slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
					</div>
					<div className="flex flex-row gap-[10px] mt-4 overflow-hidden">
						{images2.map((image) => (
							<img
								className="w-[300px] animate-reverse_slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
						{images2.map((image) => (
							<img
								className="w-[300px] animate-reverse_slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
					</div>
					<div className="flex flex-row-reverse gap-[10px] mt-4 overflow-hidden">
						{images3.map((image) => (
							<img
								className="w-[300px] animate-slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
						{images3.map((image) => (
							<img
								className="w-[300px] animate-slider"
								key={image.key}
								alt={image.alt}
								src={image.src}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
