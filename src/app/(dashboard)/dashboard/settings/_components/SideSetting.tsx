"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CheckCircle2, Key, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export function SideSetting() {
    const [imageUrl, setImageUrl] = useState(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AakfxVtAP4R24wApjG814o3lVRuBo5.png"
    )
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        console.log("Profile Image URL:", imageUrl)
    }, [imageUrl])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const fileUrl = URL.createObjectURL(file)
            setImageUrl(fileUrl)
        }
    }

    const handleAvatarClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <Card className="w-full max-w-[408px] overflow-hidden border-0 shadow-lg">
            <div
                className="h-44"
                style={{
                    background: "linear-gradient(135deg, #82B7B4 0%, #EAFFFE 100%)",
                }}
            />
            <div className="relative px-6 pb-6">
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />

                <div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 cursor-pointer"
                    onClick={handleAvatarClick}
                >
                    <div className="relative">
                        <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                            <AvatarImage src={imageUrl || "/placeholder.svg"} alt="Profile Image" />
                            <AvatarFallback className="text-2xl bg-gray-200 text-gray-600">
                                MJ
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-2 right-2 bg-white rounded-full p-0.5">
                            <CheckCircle2 className="h-6 w-6 text-teal-500 fill-teal-500" />
                        </div>
                    </div>
                </div>

                {/* Name and Role */}
                <div className="pt-20 text-center mb-6">
                    <h2 className="text-xl font-semibold text-[#82B7B4] mb-1">Maria Jasmin</h2>
                    <p className="text-sm text-gray-500">Admin</p>
                </div>

                {/* Information List */}
                <div className="space-y-3">
                    <InfoRow label="Name:" value="Maria Jasmin" />
                    <InfoRow label="Email:" value="Maria.Jasmin@gmail.com" />
                    <InfoRow label="Phone:" value="+1 (555) 214-8574" />
                    <InfoRow label="Location:" value="San Francisco" />
                    <InfoRow label="Member Since:" value="14 August 2025" />
                </div>

                {/* Menus */}
                <div className="mt-8">
                    <h2 className="text-[#343A40] font-semibold mb-3">Menus</h2>
                    <div className="space-y-[16px] rounded-lg">
                        <Link
                            href="/dashboard/settings/profile"
                            className={clsx(
                                "flex gap-4 cursor-pointer rounded-lg py-[9px] border border-[#E7E7E7] px-[16px] font-semibold text-[14px]",
                                pathname === "/dashboard/settings/profile"
                                    ? "bg-[#EEEEEE] text-[#343A40]"
                                    : "text-[#343A40]"
                            )}
                        >
                            <User /> Personal Information
                        </Link>

                        <Link
                            href="/dashboard/settings/password"
                            className={clsx(
                                "flex gap-6 cursor-pointer rounded-lg py-[9px] border border-[#E7E7E7] px-[16px] font-semibold text-[14px]",
                                pathname === "/dashboard/settings/password"
                                    ? "bg-[#EEEEEE] text-[#343A40]"
                                    : "text-[#343A40]"
                            )}
                        >
                            <Key /> Password
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex text-sm gap-3">
            <span className="text-[#5B6574] font-medium text-[16px]">{label}</span>
            <span className="text-[#68706A]">{value}</span>
        </div>
    )
}
