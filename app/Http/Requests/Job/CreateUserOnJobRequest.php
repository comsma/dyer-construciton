<?php

namespace App\Http\Requests\Job;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class CreateUserOnJobRequest extends FormRequest
{
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
            'password' => ['string', Password::defaults(), 'confirmed'],
        ];
    }
}
