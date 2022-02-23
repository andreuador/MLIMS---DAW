<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
Marks from // Markup Languages //
--------------------------------
    <xsl:apply-templates/>
</xsl:template>

<xsl:template match="student">
    <xsl:value-of select="name"/><xsl:text>&#32;</xsl:text><xsl:value-of select="lastname"/>
    <xsl:text>&#32;</xsl:text><xsl:value-of select="credits/credit[name='Markup Languages']/mark"/>
</xsl:template>

</xsl:stylesheet>