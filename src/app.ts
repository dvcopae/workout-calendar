import {google, CalendarEvent } from "calendar-link";
import PromptSync from "prompt-sync"
import { WorkoutRoutine, WorkoutExercise } from "./gym";

const prompt = PromptSync({sigint: true})

const routine: WorkoutRoutine = {
    name: prompt("Workout routine name: "),
    exercises: [],
    toString() {
        return this.exercises.map(e => e.toString()).join("\n");
    }
}

var newExercise = true;
while (newExercise)
{
    console.log("\n")
    newExercise = ('Y' === prompt("Enter a new exercise? Y / N: ").toUpperCase())
    if (newExercise)
    {
        let ex: WorkoutExercise = {
            name: prompt("Exercise name: "),
            sets: parseInt(prompt("Number of sets: ")),
            reps: parseInt(prompt("Number of repetitions: ")),
            toString() {
                return `${this.name}: ${this.sets} x ${this.reps}`;
            }
        }

        routine.exercises.push(ex)
    }
}

const workout_duration = 10 + routine.exercises.map(e => e.sets * 4).reduce((a, b) => a + b, 0)

// Set event as an object
const event: CalendarEvent = {
  title: routine.name,
  description: routine.toString(),
  start: new Date(),
  allDay: false,
  busy: true,
  location: "https://maps.app.goo.gl/XLYfMLfqVydCdymF6",
  duration: [workout_duration, "minute"],
};

console.log(`\nPaste the following link in your browser to import the workout event:\n ${google(event)}`)