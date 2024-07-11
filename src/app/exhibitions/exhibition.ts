import { Area } from "../area/area";

export interface Exhibition {
    id: string
    name: string
    space: Area
    startDate: Date
    endDate: Date
}
