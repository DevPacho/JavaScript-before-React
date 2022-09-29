// EcmaScript modules, export!

/* File1 - with 'default' keyword */

export default function sum(a, b) {
    return (a + b)
}

export default function sub(a, b) {
    return (a - b)
}

/* File2 - without 'default' keyword */

export function sum(a, b) {
    return (a + b)
}

export function sub(a, b) {
    return (a - b)
}

/* Main file with 'default' keyword */

import sum from "./file1"
import sub from "./file2"

function calculator () {
    sum()
    sub()
}

/* Main file without 'default' keyword */

import { sum } from "./file1"
import { sub } from "./file2"
import { sum, sub } from "./file1"

function calculator () {
    sum()
    sub()
}

// In REACT!

import React from "react"
React.useState
React.useEffect
React.Fragment

/* Better with... */

import React, { useState, useEffect, Fragment } from "react"
