import { Dialog } from 'bits-ui';
import Overlay from './Overlay.svelte';
import Content from './Content.svelte';
import Header from './Header.svelte';
import Title from './Title.svelte';
import CloseIcon from './CloseIcon.svelte';
import Body from './Body.svelte';
import Footer from './Footer.svelte';

export default {
	Root: Dialog.Root,
	Portal: Dialog.Portal,
	Overlay,
	Content,
	Header,
	Title,
	CloseIcon,
	Body,
	Footer,
};
