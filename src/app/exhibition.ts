import { Space } from "./space";

export interface Exhibition {
    id: string
    name: string
    space: Space
    startDate: Date
    endDate: Date
}
