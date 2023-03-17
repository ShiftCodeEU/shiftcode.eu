"use client";

import Link from "next/link";
import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/cn";

const navItems: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/showcase",
		description:
			"A modal dialog that interrupts the user with important content and expects a response."
	},
	{
		title: "Hover Card",
		href: "/showcase",
		description:
			"For sighted users to preview content available behind a link."
	},
	{
		title: "Progress",
		href: "/showcase",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
	},
	{
		title: "Scroll-area",
		href: "/showcase",
		description: "Visually or semantically separates content."
	},
	{
		title: "Tabs",
		href: "/showcase",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time."
	},
	{
		title: "Tooltip",
		href: "/showcase",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
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
										<div className="mt-4 mb-2 text-lg font-medium text-white">
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
							<ListItem href="/showcase" title="Twitter">
								Feel free to hit us up on twitter with some
								meme&apos;s, general question of just to check
								our tweets!
							</ListItem>
							<ListItem href="/showcase" title="Source-code">
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
				<NavigationMenuItem>
					<Link href="/showcase" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Docs Hub
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
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
						"block select-none space-y-1 rounded-md p-3 leading-none text-white no-underline outline-none transition-colors focus:bg-accent hover:bg-secondary hover:text-accentAlt",
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
