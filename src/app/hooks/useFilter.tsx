import { FilterContext } from "@/contexts/filter";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext)
}