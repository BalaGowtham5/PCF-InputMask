import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class InputMask implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    private _notifyOutputChanged: () => void;
    private _inputElement: HTMLInputElement;
    
    // FIXED: Removed ": string" because it is inferred from '=""'
    private _currentValue = "";

    // FIXED: Added comment to satisfy "no-empty-function" rule
    constructor() {
        // Empty constructor
    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._notifyOutputChanged = notifyOutputChanged;

        // Create the input box
        this._inputElement = document.createElement("input");
        this._inputElement.setAttribute("type", "text");
        this._inputElement.setAttribute("placeholder", "(555) 555-5555");
        this._inputElement.classList.add("mask-input");

        // Add event listener for typing
        this._inputElement.addEventListener("input", this.onInputChange.bind(this));

        container.appendChild(this._inputElement);
    }

    private onInputChange(event: Event): void {
        const input = this._inputElement;
        // 1. Strip everything that isn't a number
        let rawValue = input.value.replace(/\D/g, "");
        
        // 2. Limit to 10 digits
        if (rawValue.length > 10) {
            rawValue = rawValue.substring(0, 10);
        }

        // 3. Format as (XXX) XXX-XXXX
        let formattedValue = rawValue;
        if (rawValue.length > 6) {
            formattedValue = `(${rawValue.substring(0, 3)}) ${rawValue.substring(3, 6)}-${rawValue.substring(6)}`;
        } else if (rawValue.length > 3) {
            formattedValue = `(${rawValue.substring(0, 3)}) ${rawValue.substring(3)}`;
        } else if (rawValue.length > 0) {
            formattedValue = `(${rawValue}`;
        }

        // 4. Update the input box and the internal value
        input.value = formattedValue;
        this._currentValue = formattedValue;
        
        // 5. Notify Dataverse
        this._notifyOutputChanged();
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // If data comes from the database, display it
        if (context.parameters.maskedValue.raw) {
            this._currentValue = context.parameters.maskedValue.raw;
            this._inputElement.value = this._currentValue;
        }
    }

    public getOutputs(): IOutputs {
        return { maskedValue: this._currentValue };
    }

    // FIXED: Added comment to satisfy "no-empty-function" rule
    public destroy(): void { 
        // Cleanup code
    }
}