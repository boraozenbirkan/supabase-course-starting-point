import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supa } from "./supa"
import { SupabaseClient } from "@supabase/supabase-js"

export const useCheckAuth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        supa.auth.getUser().then(response => {
            if(response.data.user === null){
                navigate("/login")
            }
        })
    }, [navigate])
}