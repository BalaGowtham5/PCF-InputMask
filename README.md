# 📞 Custom Input Mask PCF Control

A **Power Apps Component Framework (PCF)** control that enforces specific text formats on input fields. This control specifically implements a **US Phone Number mask** that automatically formats the text as `(XXX) XXX-XXXX` while the user types.

### 🚀 Features
* **Auto-Formatting:** Automatically inserts parentheses and dashes to ensure consistent data entry.
* **Data Integrity:** Prevents users from entering letters or special characters in phone fields.
* **Seamless UX:** Behaves like a native text box but with intelligent masking logic.
* **Model-Driven & Canvas:** Fully compatible with both app types.

---

### 📋 Prerequisites & Field Configuration
To use this control in your environment, ensure you are binding it to the correct field type:
* **Data Type:** Single Line of Text (Text)
* **Format:** Phone (Optional, but recommended) or Text
* **Max Length:** Must be at least 14 characters to accommodate the mask format `(555) 555-5555`.

---

### 📥 Installation (For Non-Developers)
If you just want to use the control without writing code:
1. [**Click here to download the Unmanaged Solution (.zip)**](./Solution/bin/Debug/Solution.zip)
2. Go to **make.powerapps.com** -> **Solutions** -> **Import Solution**.
3. Select the `.zip` file you downloaded.
4. Once imported, open your Form, select a **Text** field (e.g., Business Phone), and change the "Component" to **Input Mask Control**.

---

### 🛠️ Developer Guide (Build & Modify)
Follow these steps if you want to modify the source code (e.g., to change the mask format to a Credit Card or ZIP code).

#### 1. System Requirements
* **Node.js** (LTS Version)
* **VS Code** (Visual Studio Code)
* **Microsoft Power Platform CLI** (Install via VS Code Extension or MSI)

#### 2. Clone & Install
```bash
git clone [https://github.com/BalaGowtham5/PCF-InputMask](https://github.com/YOUR_USERNAME/PCF-InputMask.git)
cd PCF-InputMask/Control
npm install
