import cx from 'classnames';
import { MouseEvent } from 'react';
interface IButtonClasses {
	container?: string;
	button?: string;
	bg?: string;
	hover?: string;
	textColor?: string;
}
interface IButton {
	text: JSX.Element;
	type?: BUTTON_ACTION;
	style?: BUTTON_STYLES;
	buttonOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
	classes?: IButtonClasses;
	isDisabled?: boolean;
	isLoading?: boolean;
	id?: string;
}

export enum BUTTON_STYLES {
	DEFAULT = 'default',
	UNDERLINE = 'underline',
	LINK = 'link',
}

export enum BUTTON_ACTION {
	SUBMIT = 'submit',
	BUTTON = 'button',
	RESET = 'reset',
}

const Button = ({
	text,
	isDisabled,
	buttonOnClick,
	classes,
	type,
	style = BUTTON_STYLES.DEFAULT,
	id,
}: IButton) => {
	const classnames = cx(
		{
			'disabled:opacity-30 disabled:bg-gray-700 cursor-default': isDisabled,
			'text-white bg-yellow px-4 py-2 rounded-sm hover:opacity-70':
				style === BUTTON_STYLES.DEFAULT,
			'text-yellow pr-2 text-left tracking tight animated-border':
				style === BUTTON_STYLES.UNDERLINE,
		},
		classes?.button || ''
	);
	const button = (
		<button
			disabled={isDisabled}
			onClick={buttonOnClick || undefined}
			type={type}
			id={id}
			className={classnames}
		>
			{text}
		</button>
	);

	return classes?.container ? (
		<div className={classes.container}>{button}</div>
	) : (
		button
	);
};

export default Button;
