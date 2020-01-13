/*
 * Copyright 2020-present ula-aca
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LedgerEndpointGetResults } from '@ula-aca/aries-cloudagent-interface'
import { LedgerMessageTypes } from './LedgerMessageTypes'

interface GetEndpointByDidBody {
  did: string
}

interface GetEndpointByDidMessage {
  type: LedgerMessageTypes.GET_ENDPOINT_BY_DID
  body: GetEndpointByDidBody
}

type GetEndpointByDidResult = LedgerEndpointGetResults

export { GetEndpointByDidBody, GetEndpointByDidMessage, GetEndpointByDidResult }
