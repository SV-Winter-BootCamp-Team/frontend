import mycanvas from '/images/svg/mycanvas.svg'
import invite from '/images/svg/invite.svg'
import backgroundupload from '/images/svg/backgroundupload.svg'
import aibackground from '/images/svg/aibackground.svg'
import recommendbackground from '/images/svg/recommendbackground.svg'
import aisticker from '/images/svg/aisticker.svg'
import history from '/images/svg/history.svg'
import text from '/images/svg/text.svg'

export type ButtonProps = {
	name: string
	handleButtonClick: (menu: string) => void
}

const menuIcons: { [key: string]: string } = {
	'내 캔버스': mycanvas,
	초대하기: invite,
	'배경 업로드': backgroundupload,
	'AI 배경': aibackground,
	'추천 배경': recommendbackground,
	'AI 스티커': aisticker,
	히스토리: history,
}

export default function Button({ name, handleButtonClick }: ButtonProps) {
	const icon = menuIcons[name]
	return (
		<button
			type="button"
			className="flex flex-col items-center my-4 "
			onClick={() => handleButtonClick(name)}
		>
			<img src={icon} alt={name} className="w-6 h-6" />
			<p className="text-[12px] mt-[6px]">{name}</p>
		</button>
	)
}
