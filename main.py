def define_env(env):
    @env.macro
    def checkbox(name):
        lines = [
            f'<div class="mdc-checkbox">',
            f'<label>',
            f'<input type="checkbox" name="{name}" class="mdc-checkbox__native-control" />',
            f'<div class="mdc-checkbox__background">',
            f'<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></svg>',
            f'<div class="mdc-checkbox__mixedmark"></div>',
            f'</div>',
            f'<div class="mdc-checkbox__ripple"></div>',
            f'</label>',
            f'</div>',
        ]
        return ''.join(lines)
