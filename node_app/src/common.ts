import { z } from 'zod'

export const DATA_TOPIC = 'airfarm/+/data'
export const SENSOR_TOPIC = 'airfarm/sensors/data'
export const IO_TOPIC = 'airfarm/io/data'

export const CONTROL_TOPIC = 'airfarm/control/+'
export const FAN_CONTROL_TOPIC = 'airfarm/control/fan'
export const PUMP_CONTROL_TOPIC = 'airfarm/control/pump'
export const LED_CONTROL_TOPIC = 'airfarm/control/led'

export const THRESHOLD_TOPIC = 'airfarm/threshold/set'

export const airfarmDataSchema = z.object({
    temperature: z.number(),
    humidity: z.number(),
    co2Level: z.number(),
    timestamp: z.string().datetime(),
})

export type airfarmData = z.infer<typeof airfarmDataSchema>

export const deviceStateSchema = z.object({
    led: z.boolean(),
    fan: z.boolean(),
    pump: z.boolean(),
})
export type deviceState = z.infer<typeof deviceStateSchema>

export const thresholdConfigSchema = z.object({
    maxTemp: z.number(),
    minTemp: z.number(),
    maxHumid: z.number(),
    minHumid: z.number(),
    maxCo2: z.number(),
    minCo2: z.number(),
})
