export interface WorkoutExercise {
    name: string,
    sets: number,
    reps: number,
    toString: () => string
}

export interface WorkoutRoutine {
    name: string,
    exercises: WorkoutExercise[],
    toString: () => string
}