import { Router } from "express";

export interface singleRoute {
    type: string,
    route: Router
};

export interface allRoute {
    forEach(arg0: (el: singleRoute) => void),
    [id: number]: singleRoute
}