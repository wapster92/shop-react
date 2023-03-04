import axios from "axios";
import requests from "./request";

export const api = {
  ...requests(axios, 'http://localhost')
}
