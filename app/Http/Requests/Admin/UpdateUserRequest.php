<?php

namespace App\Http\Requests\Admin;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'company' => ['string', 'max:255', 'nullable'],
            'username' => ['string', 'max:255', Rule::unique(User::class)->ignore($this->route('userId'))],
            'hasViewDocuments' => ['boolean'],
            'hasModifyDocuments' => ['boolean'],
            'hasModifyGallery' => ['boolean'],
            'hasAdmin' => ['boolean'],

        ];
    }
}
