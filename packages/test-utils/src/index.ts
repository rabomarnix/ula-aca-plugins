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

import sinon from 'sinon'

function stubInterfaceFunction({
  Class,
  functionName,
  status,
  data = undefined,
  rejects = false
}): sinon.SinonStub {
  const stub = sinon.stub(Class.prototype, functionName)

  if (rejects) {
    return stub.rejects({
      response: {
        status,
        data
      }
    })
  }

  return stub.resolves({
    status,
    data
  })
}

function stubNoAxiosResponseInterfaceFunction({
  Class,
  functionName,
  data
}): sinon.SinonStub {
  const stub = sinon.stub(Class.prototype, functionName)

  return stub.rejects({
    toJSON: () => data
  })
}

export { stubInterfaceFunction, stubNoAxiosResponseInterfaceFunction }
