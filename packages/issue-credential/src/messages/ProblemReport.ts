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

import { V10CredentialProblemReportRequest } from '@ula-aca/aries-cloudagent-interface'

import { IssueCredentialMessageTypes } from './IssueCredentialMessageTypes'

interface ProblemReportBody extends V10CredentialProblemReportRequest {
  cred_ex_id: string
}

interface ProblemReportMessage {
  type: IssueCredentialMessageTypes.PROBLEM_REPORT
  body: ProblemReportBody
}

export { ProblemReportMessage, ProblemReportBody }
