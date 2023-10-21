#! /usr/bin/env node

import { Command } from "commander";
import { start } from "./app";

const program = new Command()

program
    .version("1.0.0")
    .description("Workout calendar importer")
    .parse(process.argv);

start()