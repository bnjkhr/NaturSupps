// Export-Funktionen für Einkaufsliste und Ergebnisse

/**
 * Formatiert die Einkaufsliste als Text
 * @param {Array} shoppingList - Die Einkaufsliste
 * @param {Array} costComparison - Kostenvergleich-Daten
 * @returns {string} - Formatierter Text
 */
export const formatShoppingListAsText = (shoppingList, costComparison = []) => {
  let text = '🥬 NATURSUPPS EINKAUFSLISTE\n';
  text += '═'.repeat(30) + '\n\n';

  // Gruppiere nach Supplement
  const grouped = {};
  shoppingList.forEach(item => {
    if (!grouped[item.supplement]) {
      grouped[item.supplement] = [];
    }
    grouped[item.supplement].push(item);
  });

  // Einkaufsliste
  Object.entries(grouped).forEach(([supplement, items]) => {
    text += `📌 ${supplement}\n`;
    items.forEach(item => {
      text += `   • ${item.food}\n`;
      text += `     ${item.amount}\n`;
    });
    text += '\n';
  });

  // Kostenvergleich falls vorhanden
  if (costComparison.length > 0) {
    text += '═'.repeat(30) + '\n';
    text += '💰 KOSTENVERGLEICH\n\n';

    let totalSavings = 0;
    costComparison.forEach(item => {
      if (item.naturalOptions?.length > 0) {
        const best = item.naturalOptions.reduce((b, c) =>
          c.savingsPerMonth > b.savingsPerMonth ? c : b
        );
        if (best.savingsPerMonth > 0) {
          totalSavings += best.savingsPerMonth;
          text += `${item.supplement}: ${best.food} spart ${best.savingsPerMonth.toFixed(2)}€/Monat\n`;
        }
      }
    });

    if (totalSavings > 0) {
      text += `\n✅ Gesamtersparnis: ${totalSavings.toFixed(2)}€/Monat\n`;
    }
  }

  text += '\n─'.repeat(30) + '\n';
  text += 'Erstellt mit NaturSupps\n';

  return text;
};

/**
 * Kopiert Text in die Zwischenablage
 * @param {string} text - Der zu kopierende Text
 * @returns {Promise<boolean>} - Erfolg
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback für ältere Browser
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    }
  } catch (err) {
    console.error('Kopieren fehlgeschlagen:', err);
    return false;
  }
};

/**
 * Teilt Inhalt über die Web Share API
 * @param {Object} shareData - { title, text, url }
 * @returns {Promise<boolean>} - Erfolg
 */
export const shareContent = async (shareData) => {
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return true;
    }
    return false;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Teilen fehlgeschlagen:', err);
    }
    return false;
  }
};

/**
 * Prüft ob Web Share API verfügbar ist
 * @returns {boolean}
 */
export const canShare = () => {
  return typeof navigator !== 'undefined' && !!navigator.share;
};

/**
 * Öffnet Druckdialog für die Seite
 */
export const printPage = () => {
  window.print();
};

/**
 * Erstellt eine WhatsApp-Share-URL
 * @param {string} text - Der zu teilende Text
 * @returns {string} - WhatsApp URL
 */
export const getWhatsAppShareUrl = (text) => {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};

/**
 * Erstellt eine E-Mail-Share-URL
 * @param {string} subject - Betreff
 * @param {string} body - E-Mail-Text
 * @returns {string} - mailto URL
 */
export const getEmailShareUrl = (subject, body) => {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const exportUtils = {
  formatShoppingListAsText,
  copyToClipboard,
  shareContent,
  canShare,
  printPage,
  getWhatsAppShareUrl,
  getEmailShareUrl
};

export default exportUtils;
