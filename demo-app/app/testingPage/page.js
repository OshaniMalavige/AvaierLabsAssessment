"use client";

import { useEffect } from "react";
import { AppProvider, useAppContext } from "@/components/providers/AppProvider";
import BorrowerDetail from "@/components/BorrowerDetail";

function ActiveBorrowerSetter({ borrowerId }) {
    const { setActiveBorrower } = useAppContext();

    useEffect(() => {
        setActiveBorrower(borrowerId);
    }, [borrowerId, setActiveBorrower]);

    return null;
}

export default function TestingPage() {
    return (
        <AppProvider>
            <ActiveBorrowerSetter borrowerId="1" />
            <BorrowerDetail />
        </AppProvider>
    );
}
