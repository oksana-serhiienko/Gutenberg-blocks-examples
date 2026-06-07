<?php
$blockName = "cta-button";
$label = $attributes['label'] ?? 'Get in touch';
$align = $attributes['align'] ?? 'left';
$destination = $attributes['destination'] ?? '/contact-us/';
?>
<div class="<?php echo $blockName . '-' . $align; ?>">
    <a href="<?php echo $destination; ?>" class="<?php echo $blockName; ?>">
        <?php echo $label; ?>
    </a>
</div>
<style>
    .<?php echo $blockName; ?>{
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        display: inline-block;
        background: #ec489a;
        text-decoration: none;
    }
    .<?php echo $blockName . '-center' ?>{ text-align: center; }
    .<?php echo $blockName . '-right' ?>{ text-align: right; }
</style>