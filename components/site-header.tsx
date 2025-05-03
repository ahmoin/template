"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavUser } from "@/components/nav-user";

export function SiteHeader() {
	return (
		<header
			data-slot="site-header"
			className="bg-background sticky top-0 z-50 flex w-full items-center border-b"
		>
			<div className="flex h-(--header-height) w-full items-center gap-2 px-2 pr-4">
				<MainNav />
				<MobileNav />
				<div className="ml-auto flex items-center gap-2">
					<NavUser />
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
