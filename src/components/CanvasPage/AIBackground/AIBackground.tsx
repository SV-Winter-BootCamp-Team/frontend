import { useState } from 'react'
import ColorPicker from './ColorPicker'
import Theme from './Theme'
import Color from './Color'
import palette from '/images/svg/palette.svg'
import brush from '/images/svg/brush.svg'
import history from '/images/svg/history.svg'
import Button from './Button'

export default function AIBackground() {
	const [color, setColor] = useState<string>('#FFFFFF')
	const [theme, setTheme] = useState<string>('')

	//TODO: color, theme를 이용해서 AI 배경을 생성을 요청하는 API 호출

	return (
		<div className="flex flex-col">
			{/* 색상 영역 */}
			<div className="mt-2 ml-6">
				<div className="flex">
					<img src={palette} alt="palette" className="w-5" />
					<p className="my-4 ml-1">색상</p>
				</div>
				<div className="grid grid-cols-7 gap-3 w-72">
					<ColorPicker color={color} setColor={setColor} />
					<Color color="#EC5F59" setColor={setColor} />
					<Color color="#F1A259" setColor={setColor} />
					<Color color="#FAE74F" setColor={setColor} />
					<Color color="#B7E855" setColor={setColor} />
					<Color color="#5CC55D" setColor={setColor} />
					<Color color="#A9F0DE" setColor={setColor} />
					<Color color="#4B7EF7" setColor={setColor} />
					<Color color="#3340EF" setColor={setColor} />
					<Color color="#9161F6" setColor={setColor} />
					<Color color="#EF8BE5" setColor={setColor} />
					<Color color="#FFFFFF" setColor={setColor} />
					<Color color="#BFBFBF" setColor={setColor} />
					<Color color="#000000" setColor={setColor} />
				</div>
			</div>
			{/* 테마 영역 */}
			<div className="mt-8 ml-4">
				<div className="flex items-center ml-2">
					<img src={brush} alt="theme" className="w-5" />
					<p className="ml-1">테마</p>
				</div>
				<div className="flex flex-wrap">
					<Theme theme="힐링되는" setTheme={setTheme} />
					<Theme theme="깔끔한" setTheme={setTheme} />
					<Theme theme="귀여운" setTheme={setTheme} />
					<Theme theme="야늑한" setTheme={setTheme} />
					<Theme theme="사랑스러운" setTheme={setTheme} />
					<Theme theme="밝은" setTheme={setTheme} />
					<Theme theme="어두운" setTheme={setTheme} />
					<Theme theme="차분한" setTheme={setTheme} />
					<Theme theme="깔끔한" setTheme={setTheme} />
					<Theme theme="깔끔한" setTheme={setTheme} />
					<Theme theme="깔끔한" setTheme={setTheme} />
				</div>
			</div>
			<Button />
			{/* 배경 영역 */}
			{/* <div className="flex flex-col items-center mt-8">
				<div>
					<div className="flex items-center mb-4">
						<img src={history} alt="background" className="w-5" />
						<p className="ml-1">내 배경들</p>
					</div>
					<div className="grid grid-cols-2 gap-x-5 gap-y-5">
						<div className="w-[160px] bg-blue-300 h-[90px]">grid1</div>
						<div className="w-[160px] bg-blue-300 h-[90px]">grid1</div>
						<div className="w-[160px] bg-blue-300 h-[90px]">grid1</div>
						<div className="w-[160px] bg-blue-300 h-[90px]">grid1</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}
