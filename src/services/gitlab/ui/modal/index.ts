import { Dialog } from 'bits-ui';
import Overlay from './Overlay.svelte';
import Content from './Content.svelte';
import Header from './Header.svelte';
import Title from './Title.svelte';
import Close from './Close.svelte';
import CloseIcon from './CloseIcon.svelte';
import Body from './Body.svelte';
import Footer from './Footer.svelte';

export const Modal = {
	Root: Dialog.Root,
	Portal: Dialog.Portal,
	Overlay,
	Content,
	Header,
	Title,
	Close,
	CloseIcon,
	Body,
	Footer,
};
