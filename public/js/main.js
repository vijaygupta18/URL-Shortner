/* vijay.tools — URL Shortener client interactions */

// =========================================================
// Toast
// =========================================================
let toastTimer = null;
function toast(msg, type = 'success') {
    let el = document.getElementById('toast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'toast';
        el.className = 'toast';
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'toast ' + type + ' visible';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.classList.remove('visible'); }, 2800);
}

// =========================================================
// Copy to clipboard
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    // Wire all copy buttons
    document.querySelectorAll('.btn-copy[data-copy]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            try {
                await navigator.clipboard.writeText(text);
                const label = btn.querySelector('.copy-label');
                if (label) {
                    const orig = label.textContent;
                    label.textContent = 'Copied';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        label.textContent = orig;
                        btn.classList.remove('copied');
                    }, 2000);
                }
                toast('Copied to clipboard', 'success');
            } catch {
                toast('Copy failed — select and copy manually', 'danger');
            }
        });
    });

    // URL input: clear on focus if placeholder visible
    const urlInput = document.getElementById('fullUrl');
    if (urlInput) {
        urlInput.addEventListener('focus', () => {
            urlInput.closest('.url-input-wrap') &&
                urlInput.closest('.url-input-wrap').classList.add('focused');
        });
        urlInput.addEventListener('blur', () => {
            urlInput.closest('.url-input-wrap') &&
                urlInput.closest('.url-input-wrap').classList.remove('focused');
        });
    }
});

// =========================================================
// Support dialog (shared across vijay.tools)
// =========================================================
const BMC_UPI_ID   = 'vijaygupta1818@ptyes';
const BMC_UPI_NAME = 'Vijay Gupta';
const BMC_TN       = 'vijay.tools support';

function buildUpiIntent(amount) {
    const params = new URLSearchParams({ pa: BMC_UPI_ID, pn: BMC_UPI_NAME, cu: 'INR', tn: BMC_TN });
    if (amount) params.set('am', String(amount));
    return 'upi://pay?' + params.toString();
}

function wireSupportDialog() {
    const dialog  = document.getElementById('supportDialog');
    const copyBtn = document.getElementById('supportCopyBtn');
    const amt49   = document.getElementById('amount49');
    const amt99   = document.getElementById('amount99');
    if (!dialog) return;

    if (amt49) amt49.href = buildUpiIntent(49);
    if (amt99) amt99.href = buildUpiIntent(99);

    const openDialog = () => {
        dialog.classList.add('open');
        dialog.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const closeDialog = () => {
        dialog.classList.remove('open');
        dialog.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-open="support"], #supportFab').forEach(el => {
        el.addEventListener('click', openDialog);
    });
    dialog.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) closeDialog();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && dialog.classList.contains('open')) closeDialog();
    });

    if (copyBtn) {
        const icon = document.getElementById('supportCopyIcon');
        const original = icon ? icon.innerHTML : '';
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(BMC_UPI_ID);
                copyBtn.classList.add('copied');
                if (icon) icon.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    if (icon) icon.innerHTML = original;
                }, 2000);
            } catch {
                toast('Copy failed — long-press to copy manually', 'danger');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', wireSupportDialog);
