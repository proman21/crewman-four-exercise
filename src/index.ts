import * as fs from 'fs'
import { validateData, flatToHierarchical } from './task'

function cli(args: string[]) {
    const [inputPath, outputPath] = args

    const inputBuffer: string = fs.readFileSync(inputPath, 'utf-8')
    const input = JSON.parse(inputBuffer)
    validateData(input)

    const tasksOutput = flatToHierarchical(input)

    const outputBuffer = JSON.stringify(tasksOutput, undefined, 2)
    fs.writeFileSync(outputPath, outputBuffer)
}

const args = process.argv

if (args.length != 4) {
    console.error("Invalid number of arguments")
    process.exitCode = 1
} else {
    try {
        cli(args.slice(2))
    } catch (error) {
        console.error(<Error>error.message)
        process.exitCode = 1
    }
}




