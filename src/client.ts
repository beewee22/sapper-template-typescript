import * as sapper from '@sapper/app';

interface SapperStartOption {
	target: Node
}
sapper.start({
	target: document.querySelector('#sapper')
} as SapperStartOption);