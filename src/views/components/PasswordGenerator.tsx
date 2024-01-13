const PasswordGenerator = () => {
  return (
    <section class="flex flex-col gap-4">
      <div
        id="toast-message"
        class="toast toast-top toast-center"
        _="on load hide me"
      >
        <div class="alert alert-success">
          <span>Password copied to clipboard.</span>
        </div>
      </div>
      <p class="font-bold text-2xl text-center">Password Generator</p>
      <form class="card w-3/4 bg-base-100 shadow-2xl self-center">
        <div class="card-body flex flex-row">
          <input
            type="text"
            class="input input-bordered w-full max-w-s pointer-events-none"
            id="passwordField"
          />
          <button
            class="btn btn-square"
            type="button"
            _="on click
                js
                    function copyPassword() {
                        const passwordField = document.getElementById('passwordField');
                        navigator.clipboard.writeText(passwordField.value);
                    }
                    copyPassword();
                end
                show #toast-message
                wait 2s
                hide #toast-message
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </button>
          <button
            class="btn btn-square"
            type="button"
            hx-post="/generate-password"
            hx-swap="outerHTML"
            hx-target="#passwordField"
            hx-trigger="load, click"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
        <div class="card w-3/4  self-center">
          <div class="card-body ">
            <h2 class="card-title font-bold">Customize your password</h2>
            <div>
              <label>Password Length</label>
              <div class="w-full flex flex-row justify-between gap-2">
                <div class="flex flex-row justify-start items-start gap-2  w-2/4 py-4 pr-4">
                  <input
                    id="passwordLengthInput"
                    name="passwordLengthInput"
                    type="number"
                    min="0"
                    max="100"
                    value="15"
                    class="input input-bordered w-full max-w-[5em]"
                    oninput="passwordLengthRange.value=passwordLengthInput.value"
                  />
                  <input
                    id="passwordLengthRange"
                    name="passwordLengthRange"
                    oninput="passwordLengthInput.value=passwordLengthRange.value"
                    type="range"
                    min="0"
                    max="100"
                    value="15"
                    class="range range-xs mt-4"
                  />
                </div>

                <div class="w-2/4 ml-4 flex flex-row gap-4 justify-around">
                  <div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-2">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                          value="uppercase"
                          name="checkbox"
                          checked
                        />
                        <span class="label-text">Uppercase</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-2">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                          value="lowercase"
                          name="checkbox"
                          checked
                        />
                        <span class="label-text">Lowercase</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-2">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                          value="numbers"
                          name="checkbox"
                          checked
                        />
                        <span class="label-text">Numbers</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-2">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                          value="symbols"
                          name="checkbox"
                          checked
                        />
                        <span class="label-text">Symbols</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PasswordGenerator;
