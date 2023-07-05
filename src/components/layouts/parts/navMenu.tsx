"use client";

// import Link from "next/link";
import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
	// navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/cn";

const navItems: { title: string; href: string; description: string }[] = [
	{
		title: "Show all",
		href: "/showcase",
		description: "Click here to view all showcases!"
	},
	{
		title: "HardwareHulp",
		href: "/showcase/hardwarehulp",
		description:
			"A Next.js rebuild of my HardwareHulp website. HardwareHulp offers cheap hosting and IT support combined with custom computers."
	},
	{
		title: "My personal website",
		href: "/showcase/jkinsight",
		description:
			"Simple Next.js website which basically functions like a LinkTree page. An easy way to share my details by one simple webpage address."
	},
	{
		title: "ShiftCode Developments",
		href: "/showcase/shiftcode-developments",
		description:
			"This website is also build with Next.js, but this time using the (currently WIP) app directory."
	}
];

export const NavigationMenuGeneric = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						Follow the code!
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent to-accentAlt p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium text-white">
											ShiftCode
										</div>
										<p className="text-sm leading-tight text-white/90">
											Building web, app and software using
											the latest technologies.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem
								href="https://github.com/ShiftCodeEU"
								title="Github"
							>
								On our Github you&apos;ll be able to check out
								our open-source projects and it&apos;s
								source-code.
							</ListItem>
							<ListItem
								href="https://jkinsight.nl"
								title="Who is ShiftCode?"
							>
								Feel free to hit us up on twitter with some
								meme&apos;s, general question of just to check
								our tweets!
							</ListItem>
							<ListItem
								href="https://github.com/ShiftCodeEU/shiftcode.eu"
								title="SourceCode"
							>
								Want to check out the source of our website?
								Feel free to check it out!
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Showcase</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{navItems.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* <NavigationMenuItem>
					<Link href="/showcase" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Docs Hub
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem> */}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-secondary hover:text-accentAlt focus:bg-accent",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug ">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
