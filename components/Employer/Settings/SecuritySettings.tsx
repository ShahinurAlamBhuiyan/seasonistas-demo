'use client'

import { useState } from "react"
import Switch from "./Switch"
import DeleteAccountModal from "./DeleteAccountModal"
import SetPasswordModal from "./SetPasswordModal"
import OtpVerificationModal from "./OtpVerificationModal"

const SecuritySettings = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [showOtpModal, setShowOtpModal] = useState(false)

    const handleDelete = () => {
        setShowDeleteModal(true)
    }

    return (
        <div className="space-y-6 sm:space-y-12 px-4 md:px-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[24px]">Security</h3>
                    <p className="text-[14px] sm:text-[16px] text-[#767676] leading-[20px] mt-1">
                        Keep your account safe and secure with our advanced protection features.
                    </p>
                </div>
                <button className="px-6 py-2 text-sm font-semibold bg-[#559093] text-white rounded-full w-max">
                    Save
                </button>
            </div>
            <hr className="w-full" />

            {/* Account Information */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="md:w-1/4">
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[24px]">Account Information</h3>
                    <p className="text-[14px] sm:text-[16px] text-[#767676] leading-[20px] mt-1">
                        Update and manage your personal account details with ease.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div className="flex-1 min-w-[180px]">
                            <p className="text-md font-medium mb-1">Email Address</p>
                            <p className="text-sm text-[#767676]">
                                Verify and update your email for receiving important platform notifications.
                            </p>
                        </div>
                        <p className="text-sm font-medium break-all">fa****@gmail.com</p>
                    </div>

                    <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div className="flex-1 min-w-[180px]">
                            <p className="text-md font-medium mb-1">Wallet Address</p>
                            <p className="text-sm text-[#767676]">
                                Connect your wallet to receive payments and manage transactions securely.
                            </p>
                        </div>
                        <button className="text-xs px-4 py-1 border border-[#EBECF0] rounded-full">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>

            <hr className="w-full" />
            {/* Security Settings */}

            <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="md:w-1/4">
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[24px]">Security Settings</h3>
                    <p className="text-[14px] sm:text-[16px] text-[#767676] leading-[20px] mt-1">
                        Control security preferences and keep your data protected.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div className="flex-1 min-w-[180px]">
                            <p className="text-md font-medium mb-1">Google Authenticator (2FA)</p>
                            <p className="text-sm text-[#767676]">
                                Enable additional security using 2-factor authentication.
                            </p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div className="flex-1 min-w-[180px]">
                            <p className="text-md font-medium mb-1">Password</p>
                            <p className="text-sm text-[#767676]">
                                Change your password regularly to maintain account safety.
                            </p>
                        </div>
                        <button
                            onClick={() => setShowPasswordModal(true)}
                            className="text-xs px-4 py-1 border border-[#EBECF0] rounded-full"
                        >
                            Set Password
                        </button>
                    </div>
                </div>
            </div>

            <hr className="w-full" />
            {/* Delete Account */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="md:w-1/4">
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[24px]">Delete</h3>
                    <p className="text-[14px] sm:text-[16px] text-[#767676] leading-[20px] mt-1">
                        Remove your account and personal data permanently.
                    </p>
                </div>
                <div className="flex-1 flex justify-between items-start gap-4 flex-wrap">
                    <div className="flex-1 min-w-[180px]">
                        <p className="text-md font-medium mb-1">Account Delete</p>
                        <p className="text-sm text-[#767676]">
                            Permanently delete your account and remove all data and saved preferences.
                        </p>
                    </div>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 text-xs border border-[#D95057] bg-[#D950572B] text-[#D95057] rounded-full"
                    >
                        Delete Account
                    </button>
                </div>
            </div>
            {/* Modals */}
            {showDeleteModal && (
                <DeleteAccountModal
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={() => {
                        setShowDeleteModal(false)
                        console.log('Account deleted!')
                    }}
                />
            )}

            {showPasswordModal && (
                <SetPasswordModal
                    onClose={() => setShowPasswordModal(false)}
                    onConfirm={(data) => {
                        setShowPasswordModal(false)
                        setShowOtpModal(true)
                        console.log('Password Changed:', data)
                    }}
                />
            )}

            {showOtpModal && (
                <OtpVerificationModal
                    onClose={() => setShowOtpModal(false)}
                    onSubmit={(code) => {
                        console.log('OTP Entered:', code)
                        setShowOtpModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default SecuritySettings
