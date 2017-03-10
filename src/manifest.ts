export interface Person {
	name: string;
	url?: string;
	email?: string;
}

export interface Manifest {
	// mandatory (npm)
	name: string;
	version: string;
	engines: { [name: string]: string; };

	// vscode
	publisher: string;
	icon?: string;
	contributes?: { [contributionType: string]: any; };
	activationEvents?: string[];
	extensionDependencies?: string[];
	galleryBanner?: { color?: string; theme?: string; };
	preview?: boolean;
	badges?: { url: string; href: string; description: string; }[];
	markdown?: 'github' | 'standard';
	_bundling?: { [name: string]: string; }[];
	_testing?: string;
	enableProposedApi?: boolean;

	// optional (npm)
	author?: string | Person;
	displayName?: string;
	description?: string;
	keywords?: string[];
	categories?: string[];
	homepage?: string;
	bugs?: string | { url?: string; email?: string };
	license?: string;
	contributors?: string | Person[];
	main?: string;
	repository?: string | { type?: string; url?: string; };
	scripts?: { [name: string]: string; };
	dependencies?: { [name: string]: string; };
	devDependencies?: { [name: string]: string; };
	private?: boolean;
	files?: string[];

	// not supported (npm)
	// bin
	// man
	// directories
	// config
	// peerDependencies
	// bundledDependencies
	// optionalDependencies
	// os?: string[];
	// cpu?: string[];
	// preferGlobal
	// publishConfig
}
