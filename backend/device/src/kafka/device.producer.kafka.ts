import {producer} from "./index";
import {CompressionTypes} from "kafkajs";

const topic = "device"

export const sendDeviceData = async (message: String) => {
    const key = "key";
    const msg = JSON.stringify(message);

    await producer.send({
        topic,
        compression: CompressionTypes.GZIP,
        messages: [{key , value: msg}]
    });
}