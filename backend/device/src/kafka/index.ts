import {Kafka} from "kafkajs";

const ip = require("ip");

const kafka = new Kafka({
    brokers: [`localhost:9092`], //todo: fixme
    clientId: `producer-1`
});

export const producer = kafka.producer();
